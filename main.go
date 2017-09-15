package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

var _CallMux *CallMux

func main() {
	_CallMux = &CallMux{}
	go fileServer()
	http.ListenAndServe(":8848", _CallMux) //设置监听的端口

}
func fileServer() {
	http.Handle("/", http.FileServer(http.Dir("")))
	http.ListenAndServe(":88", nil)
}

type CallMux struct {
}

func (this *CallMux) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Println("1")

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	url := "http://" + strings.Replace(r.Host, ":8848", "", -1) + r.URL.String()

	body, _ := ioutil.ReadAll(r.Body)
	if len(body) == 0 {
		body = nil
	}
	var res *http.Response
	r.Header.Set("Referer", "http://xinyue.qq.com/act/pc/a20160623dnfryzc/index.shtml")
	if r.Header.Get("FUCKCOOKIE") != "" {
		r.Header.Set("Cookie", r.Header.Get("FUCKCOOKIE"))

	}
	fmt.Println(r.Header.Get("Cookie"))
	if r.Method == "POST" {
		res = httpQuery(url, true, body, r.Header)
	} else {
		res = httpQuery(url, false, body, r.Header)
	}

	html, _ := ioutil.ReadAll(res.Body)
	fmt.Println("1")

	for k, v := range res.Header {

		w.Header().Set(k, v[0])

	}
	cookieStr := ""
	cookieJson := make(map[string]string)
	for _, v := range res.Cookies() {
		cookieStr += v.Name + "=" + v.Value + ";"
		cookieJson[v.Name] = v.Value

	}

	_json, _ := json.Marshal(cookieJson)
	w.Header().Set("Set-Cookie", cookieStr)
	w.Header().Set("cookie", string(_json))

	w.Write(html)
	//w.Header().Set(v.Name, v.Value)
}
func httpQuery(url string, is_post bool, data []byte, header http.Header) *http.Response {
	client := &http.Client{}

	var req *http.Request
	if is_post {

		req, _ = http.NewRequest("POST", url, bytes.NewReader(data))
		//req.Header.Set("Content-Type", "application/x-www-form-urlencoded; Charset=UTF-8")
	} else {
		req, _ = http.NewRequest("GET", url, nil)
	}

	req.Header = header

	res, _ := client.Do(req)

	return res

}
