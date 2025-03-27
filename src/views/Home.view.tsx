import usePageTitle from "../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default/Default.layout";
import PostList from "../features/PostList.feature";
import UseMetrics from "../features/UseMetrics";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";

export default function Home() {
  usePageTitle("Home");

  return (
    <DefaultLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
          alignItems: "center",
        }}
      >
        <UserTopTags />
        <UserEarnings />
      </div>
      <UseMetrics />
      <PostList />
    </DefaultLayout>
  );
}
