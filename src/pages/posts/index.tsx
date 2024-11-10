import { GetStaticProps, NextPage } from "next/types";
import { useAtom } from "jotai";
import { sortOrderAtom, SortOrder } from "../../../src/atoms";

type Post = {
  id: number;
  title: string;
  date: string;
};

type HomeProps = {
  allPostsData: Post[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      allPostsData: [
        { id: 1, title: "First Post", date: "2024-01-01" },
        { id: 2, title: "Second Post", date: "2024-01-02" },
        { id: 3, title: "Third Post", date: "2024-01-03" },
      ],
    },
  };
};

const Home: NextPage<HomeProps> = ({ allPostsData }) => {
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);

  const sortedPosts = allPostsData.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  const posts =
    sortOrder === SortOrder.Ascending
      ? sortedPosts
      : [...sortedPosts].reverse();

  return (
    <>
      <div>
        <span>
          <input
            type="radio"
            id="descending"
            name="sortOrder"
            value="descending"
            checked={sortOrder === SortOrder.Descending}
            onChange={() => setSortOrder(SortOrder.Descending)}
          />
          <label htmlFor="descending">Newer</label>
        </span>
        <span>
          <input
            type="radio"
            id="ascending"
            name="sortOrder"
            value="ascending"
            checked={sortOrder === SortOrder.Ascending}
            onChange={() => setSortOrder(SortOrder.Ascending)}
          />
          <label htmlFor="ascending">Older</label>
        </span>
      </div>

      <div>
        {posts.map(({ id, title, date }) => (
          <div key={id}>
            <p>
              date: {date}, title: {title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
