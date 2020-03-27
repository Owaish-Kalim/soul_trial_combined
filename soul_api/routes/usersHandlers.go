package routes

import (
	"fmt"
	"encoding/json"
	"net/http"
)

func Create(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	usr, err := CreateUser(w, r)
	fmt.Println(usr)
	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err)
	}

	w.Header().Set("Content-Type", "application/json")
	// w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(usr)
}
