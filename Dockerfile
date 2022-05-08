FROM node:latest

WORKDIR /
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN yarn build

FROM golang:latest


WORKDIR /
COPY go.mod .
RUN export GO111MODULE=on
RUN go mod download
COPY . .
RUN mkdir out
RUN go build -o out

ENTRYPOINT ["/out/grantcreates3.0"]
CMD ["start"]