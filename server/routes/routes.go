package routes

import (
	"github.com/grantmontgomery/grantcreates3.0/server/routes/blog"
	"github.com/grantmontgomery/grantcreates3.0/server/routes/home"
)



func RunRouteHandlers () {

	go blog.RunBlogPathHandler()
	go home.RunHomePathHandler()

}