package routes

import (
	"github.com/grantmontgomery/grantcreates3.0/server/routes/blog"
)



func RunRouteHandlers () {

	go blog.RunBlogPathHandler()


}