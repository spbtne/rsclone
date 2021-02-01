import React, { useEffect, useState } from "react";
import { Result, Button, Spin } from "antd";

import { userApi } from "../../../utils/api/indexApi";
import { Block } from "../../../components/indexComponents";

import "./CheckEmailInfo.scss";

const renderTextInfo = ({ hash, verified }) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        title: "Готово!",
        message: "Аккаунт успешно подтвержден!",
      };
    } else {
      return {
        status: "error",
        title: "Ошибка",
        message: "Вы указали несуществующий или неверный хеш.",
      };
    }
  } else {
    return {
      status: "info",
      title: "Сорян =)",
      message: `К сожалению, мы не успели настроить почтовый сервис, поэтому хэш небезопасно хранится в LocalStorage. Пожалуйста, подтвердите аккаунт здесь`,
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const hash = location.search.split("hash=")[1];
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(!!hash);
  const [info, setInfo] = useState(
    renderTextInfo({ hash, checking, verified })
  );

  const setStatus = ({ checking, verified }) => {
    setInfo(renderTextInfo({ hash, checking, verified }));
    setVerified(verified);
    setChecking(checking);
  };

  useEffect(() => {
    if (hash) {
      userApi
        .verifyHash(hash)
        .then(() => {
          setStatus({ verified: true, checking: false });
        })
        .catch(() => {
          setStatus({ verified: false, checking: false });
        });
    }
  }, []);

  // console.log({ info, checking, verified, hash });

  let verify_link = `http://localhost:3000/registration/verify?hash=${window.localStorage["email_hash"]}`;
  return (
    <div className="verify-block">
      <Block>
        {!checking ? (
          <Result
            status={info.status}
            title={info.title}
            subTitle={info.message}
            extra={
              info.status === "success" &&
              verified && (
                <Button type="primary" onClick={() => history.push("/login")}>
                  Войти
                </Button>
              )
            }
          />
        ) : (
          <div className="verify-block__loading">
            <Spin size="large" />
          </div>
        )}
        {!verified ? (
          <Button id="verify_link" type="primary" href={verify_link}>
            Подтвердить аккаунт
          </Button>
        ) : (
          ""
        )}
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
