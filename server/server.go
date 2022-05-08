package server

import (
	"log"
	"net/http"

	"github.com/grantmontgomery/grantcreates3.0/server/routes"
)




func RunServer() {
	fs := http.FileServer(http.Dir("./dist"))
	http.Handle("/dist/", http.StripPrefix("/dist/", fs))
	routes.RunRouteHandlers()
	log.Println("Server started on localhost:3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}

