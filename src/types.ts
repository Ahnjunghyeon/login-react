export interface UserInfo {
  username: string;
  profilePicHandle: string | null; // profilePicHandle 속성 추가
}

export interface WithLoadingState {
  loadState: "idle" | "loading" | "failed";
}
