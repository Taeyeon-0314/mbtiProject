import { create } from "zustand";


const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,  // 초기 상태
    setUser: (user) => {
        localStorage.setItem('user', JSON.stringify(user));  // localStorage에 저장
        set({ user });
    },
    logout: () => {
        localStorage.removeItem('user');  // 로그아웃 시 localStorage에서 제거
        set({ user: null });
    },
}));

export default useUserStore;