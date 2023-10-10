> **types spec**  
> 問題の形式、英単語や暗記、歴史など様々。seed に記述する。
> format seed に選択か記述など書かれてる

##　英単語

> questions api から質問と答えを取得する。/dashboad などで question を作成するときに形式:英単語を選択した場合
> 選択形式か記述形式を選ぶことができる(フラグ管理をする)。また、front の選択肢に自動的に表示される

> types.question_format_name == "英単語"の場合に questions.format_id に選択か記述の id を保存する。
> questions.format_id == 記述の場合は解答を先生側に採点してもらう。
> questions.format_id == 選択の場合は answer.damy_data を保存する。また選択の場合は、quetion.answer == int となる
