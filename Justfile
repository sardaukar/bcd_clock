registry_host := env_var('REGISTRY_HOST')

default:
	@just --list

build_docker_image:
	docker build -t {{registry_host}}/sardaukar/bcd_clock .

tag_docker_image image_id:
	docker tag {{image_id}} {{registry_host}}/sardaukar/bcd_clock:latest

push_docker_image:
  docker push {{registry_host}}/sardaukar/bcd_clock