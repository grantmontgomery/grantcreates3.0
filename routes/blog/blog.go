package blog

import (
	"net/http"
)


func serveArticle (w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	w.Write([]byte(path))
}

func RunBlogPathHandler() {
	http.HandleFunc("/blog/*", serveArticle )
}