import useAxios from "../../hooks/useAxios"
import "./style.css"

const url = "https://my-posts-api-v1.onrender.com/api/posts"

const Feed = () => {
  const {response, loading, error} = useAxios({
    method: "get",
    url: url
  })

  return (
    <section id="sectionPost" className="flex justify-center bg-slate-50">
        <div className=" w-5/6 bg-white flex flex-col items-center">
            <div className="px-4 py-2 w-full">
              <h1 className="text-2xl">Posts</h1>
            </div>
            <div className="w-5/6">
              {loading && <h1>Loading...</h1>}
              {response.map((post, index) => {
                return (
                  <article key={index}>
                    <div className="rounded p-2 my-6 border border-solid border-slate-500">
                      <h4>{post.title}</h4>
                      <p>{post.content}</p>
                    </div>
                  </article>
                )
              })}
            </div>
        </div>
    </section>
  )
}
export default Feed