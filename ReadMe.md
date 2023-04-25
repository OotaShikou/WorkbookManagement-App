#### How to run app command
```
docker-compose up -d --build
```


#### Questions api コマンド
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