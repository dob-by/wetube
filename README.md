# Wetube Reloaded

/ -> Home

/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User (User's Profile)
/users/logout -> Log Out
// edit, delete는 현재 로그인 중인 유저만 가능 ⬇️
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
// 수정하고싶은 동영상의 id ⬇️
/videos/:id/edit -> Edit Video
// 특정 작성자만이 수정 및 삭제 가능 ⬇️
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video
