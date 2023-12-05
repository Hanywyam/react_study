## Context

- 버튼을 누르면, 테마 컬러 바꾸기(dark mode)
- useContext :hook을 이용하여 컴포넌트들의 상태, 스타일 공유.
- context.Provider는 중첩 사용 가능. 순서도 상관 없음.
- 객체를 묶어서 값을 내보냄(value={value})

```
context2 {UserData, ThemeContext, ColorData}=useContext
└─ page
   ├─ Header
   ├─ Contents
   └─ Footer
```
