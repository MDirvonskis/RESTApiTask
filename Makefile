.PHONY: help
.DEFAULT_GOAL:=help
help:	## display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-8s\033[0m %s\n", $$1, $$2 } END{print ""}' $(MAKEFILE_LIST)

CMD_DOCKER:=docker-compose --file docker-compose.yml
CMD_DOCKER_TEST:=${CMD_DOCKER} --file docker-compose.test.yml
CMD_DOCKER_SHELL:=${CMD_DOCKER_TEST} run --rm -i --service-ports --entrypoint /bin/sh


run:  ## Run server from container on port 8000
	${CMD_DOCKER} up --build


.PHONY: test_server test_client
test_server:  ## Run server unittests from container
	${CMD_DOCKER_TEST} up --build --remove-orphans --exit-code-from test_server test_server
test_client:  ## Run client/cypress tests from container
	${CMD_DOCKER_TEST} up --build --remove-orphans --exit-code-from test_client test_client

shell:  ## 
	${CMD_DOCKER_SHELL} server
shell_test_server:  ##
	${CMD_DOCKER_SHELL} test_server
#shell_test_client:  ##
#	${CMD_DOCKER_SHELL} test_client


rm:  ## Remote all container state
	${CMD_DOCKER_TEST} rm --force --stop --volumes
