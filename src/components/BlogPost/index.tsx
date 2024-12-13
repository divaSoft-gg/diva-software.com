import { useParams } from "react-router-dom";
import { useGetArticleById } from "../../services/blog-service";
import CenteredLayout from "../ui/centredLayout";
import { formatDate } from "../../common/utils";
import BlogContent from "../BlogContent";
import { Block } from "../../common/types";

export default function BlogPost() {
  const { id } = useParams();
  const { data, isSuccess } = useGetArticleById(id as string);
  return (
    <section className="py-32" id="post-section">
      <CenteredLayout>
        {isSuccess && (
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-5xl text-black dark:text-white">
              {data.title}
            </h1>
            <p className="text-lg text-gray-500">
              {formatDate(data.publishedAt)}
            </p>
            <img src={`${import.meta.env.VITE_CMS_URL}/${data.cover.url}`} />
            {data.blocks.map((element: Block, index: number) => (
              <BlogContent key={index} block={element} />
            ))}
          </div>
        )}
      </CenteredLayout>
    </section>
  );
}
