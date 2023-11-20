import React from "react";

const Research2 = () => {
  return (
    <>
      <form>
        <p>
          직업: <input type="text" name="userJob" />
        </p>
        <p>
          이메일: <input type="text" name="userEmail" />
        </p>
        <p>
          성별: <input type="text" name="userSex" />
        </p>
        <p>
          관심분야: <input type="text" name="userHobby" />
        </p>
        <button>이전</button>
        <button>다음</button>
      </form>
    </>
  );
};

export default Research2;
