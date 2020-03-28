# JS_chromeapp

### JavaScript clock
- setInterval(fn, 1000)

### save Username
- localstorage.getItem()
- form : enter누르면  & refresh web site
- event.preventDefault : event뒤에 아무일도 일어나지 않게 막음

### save ToDo
- localstorage는 jave의 데이터 저장 불가능(string,/...)
    - JSON.stringify(val) : js object를 string으로 바꾸는 기능
- JSON.parse(val) : string으로 저장된 데이터를 js가 읽을 수 있게 변형
- forEach

### delete ToDo
- html의 li 삭제
- deletehandler만들기 : 클릭 이벤트로하면 어떤 버튼이 클릭되었는지 몰라.
- deleteBtn의 father을 찾음 (console.dir(_.target.parentNode))
- **localTodo삭제
- arr.filter(func) : arr의 모든 아이템을 통해 함수 실행, true인 아이템으로 새 arr 만든다.
