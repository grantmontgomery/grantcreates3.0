package routes

import (
	"github.com/grantmontgomery/grantcreates3.0/routes/blog"
)



func RunRouteHandlers () {

	go blog.RunBlogPathHandler()


}