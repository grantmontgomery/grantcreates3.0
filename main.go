package main

import (
	"log"
	"net/http"

	"github.com/grantmontgomery/grantcreates3.0/routes"
)




func main() {
	routes.RunRouteHandlers()
	log.Fatal(http.ListenAndServe(":3000", nil))
}



