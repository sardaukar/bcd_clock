registry_host := env_var('REGISTRY_HOST')

default:
	@just --list

build_docker_image:
	docker build -t {{registry_host}}/sardaukar/bcd_clock:latest .

push_docker_image:
	docker push {{registry_host}}/sardaukar/bcd_clock:latest

run port="9000":
	#!/usr/bin/env bash

	cid=`docker run -dp {{port}}:80 {{registry_host}}/sardaukar/bcd_clock:latest`

	xdg-open http://localhost:{{port}}

	echo
	echo "don't forget to run 'docker rm -f ${cid}'"
	echo
