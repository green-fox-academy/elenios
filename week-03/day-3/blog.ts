// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost
import { BlogPost } from './blogpost'

class Blog {
  listOfBlogPosts: BlogPost[];


  add(blogPost: BlogPost) {
    this.listOfBlogPosts.push(blogPost);
  }
  delete(blogPost: BlogPost) {
    this.listOfBlogPosts.splice(this.listOfBlogPosts.indexOf(blogPost), 1);
  }
  update (blogPostOld: BlogPost, blogPostNew: BlogPost) {
    this.listOfBlogPosts.splice(this.listOfBlogPosts.indexOf(blogPostOld), 1, blogPostNew);
  }
}