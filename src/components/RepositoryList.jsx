import { RepositoryItem } from "./RepositoryItem";

const repostory = {
  name: "uform",
  description: "Forms inReact",
  link: "https://github.com/unform/unform",
};
export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositório</h1>
      <ul>
        <RepositoryItem repository={repostory} />
        <RepositoryItem repository={repostory} />
        <RepositoryItem repository={repostory} />
      </ul>
    </section>
  );
}
