package main

import (
	"net/http"
)


func helloworld(w http.ResponseWriter, r *http.Request){
w.Write([]byte("Hello World!"))
}



func main() {
	http.HandleFunc("/", helloworld)
	http.ListenAndServe(":3000", nil)
}



