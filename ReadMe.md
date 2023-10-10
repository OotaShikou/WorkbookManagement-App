#### How to run app command

```
docker-compose up -d --build
```

#### Auth api コマンド

```
sign_up
curl -X POST http://localhost/manage/api/v1/auth -d "[name]=test&[email]=test@example.com&[password]=password&[password_confirmation]=password"

sign_in
curl -X POST -v http://localhost/manage/api/v1/auth/sign_in -d "[email]=test@example.com&[password]=password"
```

> **Questions api コマンド**  
> uid, client, access-token を設定してください。

```
index
curl localhost/manage/api/v1/questions

show
curl localhost/manage/api/v1/questions/1

create
curl localhost/manage/api/v1/questions -X POST -d '{"content": "野球は英語で?", "answer": "baseball" }' -H "content-type:application/json"

update
curl localhost/manage/api/v1/questions/1 -X PUT -d '{"content": "野球は英語で何でしょう?", "answer": "baseball" }' -H "content-type:application/json"

destroy
curl localhost/manage/api/v1/questions/1 -X DELETE
```

> **Workbook api コマンド**  
> uid, client, access-token を設定してください。

```
index
curl localhost/manage/api/v1/workbooks

show
curl localhost/manage/api/v1/workbooks/1

create
curl localhost/manage/api/v1/workbooks -X POST -d '{"title": "綺麗にわかる英単語"}' -H "content-type:application/json"

update
curl localhost/manage/api/v1/workbooks/1 -X PUT -d '{"title": "綺麗にわかる英単語2"}' -H "content-type:application/json"

destroy
curl localhost/manage/api/v1/workbooks/1 -X DELETE
```
