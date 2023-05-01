import Image from "next/image";
import {
  useFetchQuestion,
  useCreateQuestion,
  useDeleteQuestion,
  useUpdateQuestion,
} from "../hooks/useQuestion";

export default function Home() {
  const { data, error, mutate } = useFetchQuestion();

  const Create = async () => {
    await useCreateQuestion({ content: "NewData", answer: "NewData" });
  };
  const Update = async (id: number) => {
    await useUpdateQuestion({
      content: "UpdateData",
      answer: "UpdateData",
      id,
    });
  };
  const Delete = async (id: number) => {
    await useDeleteQuestion(id);
  };
  console.log(data);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <button onClick={() => mutate()}>データを更新</button>
      {data ? (
        data.map((data: any) => (
          <div key={data.id}>
            <p>
              {data.content}
              <button onClick={() => Update(data.id)}>データ更新する</button>
              <button onClick={() => Delete(data.id)}>データ削除する</button>
            </p>
            <br />
          </div>
        ))
      ) : (
        <p>loading</p>
      )}

      <br />
      <button onClick={Create}>データ作成する</button>
    </main>
  );
}
