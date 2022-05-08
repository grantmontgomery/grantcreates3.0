package home

import (
	"html/template"
	"log"
	"net/http"
)


func serveArticle (w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("./public/home/index.html")

	if err != nil {
		log.Fatal(err)
		http.Error(w, "Internal Server error", 500)
	}


	err = ts.Execute(w, struct {}{})
}

func RunHomePathHandler() {
	http.HandleFunc("/", serveArticle )
}