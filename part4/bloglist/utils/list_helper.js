const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let likes = 0
  blogs.forEach((blog) => likes += blog.likes)
  return likes
}

const favoriteBlog = (blogs) => {
  let favorite = blogs[0]

  blogs.forEach((blog) => {
    if (blog.likes > favorite.likes) {
      console.log(`comparing ${blog.title} (${blog.likes}) with ${favorite.title} (${favorite.likes})`)
      favorite = blog
    }
  })
  console.log(`new favorite: ${favorite.title}`)
  return favorite
}

const mostBlogs = (blogs) => {
  let authors = blogs.map(blog => blog.author)
  let setOfAuthors = new Set(authors)
  let numBlogsByAuthor = []
  setOfAuthors.forEach(a => {
    let blogsByAuthor = blogs.filter(blog => blog.author === a)
    numBlogsByAuthor.push({ "author": a, "blogs": blogsByAuthor.length })
  })
  let mostBlogs = Math.max(...numBlogsByAuthor.map(obj => obj.blogs))
  return numBlogsByAuthor.filter(obj => obj.blogs === mostBlogs)[0]
}

const mostLikes = (blogs) => {
  let authors = blogs.map(blog => blog.author)
  let setOfAuthors = new Set(authors)
  let numLikesByAuthor = []

  setOfAuthors.forEach(a => {
    let totalLikes = 0
    blogs.filter(blog => blog.author === a).forEach(b => {
      totalLikes += b.likes
    })
    numLikesByAuthor.push({"author": a, "likes": totalLikes})
  })

  let mostLikes = Math.max(...numLikesByAuthor.map(obj => obj.likes))
  return numLikesByAuthor.filter(obj => obj.likes === mostLikes)[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}