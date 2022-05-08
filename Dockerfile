FROM node:latest

WORKDIR /
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN yarn build

FROM golang:latest
RUN export GO111MODULE=on
COPY go.mod .
RUN go get github.com/grantmontgomery/grantcreates3.0
RUN mkdir /out
RUN go build -o out


CMD ["start","./out/grantcreates3.0.exe"]