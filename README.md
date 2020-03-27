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