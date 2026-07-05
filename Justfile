registry_host := env_var('REGISTRY_HOST')
image := registry_host + "/sardaukar/bcd_clock"

default:
	@just --list

# build the image, tagged with `version` and `latest`
build_docker_image version="latest":
	docker build -t {{image}}:{{version}} -t {{image}}:latest .

# push a specific version (and `latest`, which points at the same build)
push_docker_image version="latest":
	docker push {{image}}:{{version}}
	@if [ "{{version}}" != "latest" ]; then docker push {{image}}:latest; fi

# build and push in one go: `just release 1.2.0`
release version:
	@just build_docker_image {{version}}
	@just push_docker_image {{version}}

run version="latest" port="9000":
	#!/usr/bin/env bash

	cid=`docker run -dp {{port}}:80 {{image}}:{{version}}`

	xdg-open http://localhost:{{port}}

	echo
	echo "don't forget to run 'docker rm -f ${cid}'"
	echo
