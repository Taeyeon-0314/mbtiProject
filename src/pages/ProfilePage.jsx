import { useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import useUserStore from "../zustand/basesStore";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const [nickname, setNickname] = useState(user?.nickname || "");
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseUpdateNickname = await updateProfile(
      user.accessToken,
      nickname
    );
    // console.log("responseUpdateNickname => ", responseUpdateNickname);
    setUser({
      ...user,
      nickname,
    });
    if (responseUpdateNickname.success) {
      alert(responseUpdateNickname.message);
      navigate("/");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
      >
        <h1 className="text-4xl text-center font-bold mb-6">프로필 수정</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">닉네임</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleNicknameChange}
            placeholder={user.nickname}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-400 text-white font-bold py-3 px-4 rounded-md hover:bg-red-600 transition duration-300"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default Profile;
