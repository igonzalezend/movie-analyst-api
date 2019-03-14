#!/bin/bash
SERVICE_NAME="IGonzalez_ECS_Backend_Service"
BUILD_NUMBER=$1
TASK_FAMILY="IGonzalez_ECS_TD_Backend"

# Create a new task definition for this build
sed -i "s;%BUILD_NUMBER%;${BUILD_NUMBER};g" backend_service.json 
aws ecs register-task-definition --family ${TASK_FAMILY} --cli-input-json file://backend_service.json

# Update the service with the new task definition and desired count
TASK_REVISION=`aws ecs describe-task-definition --task-definition ${TASK_FAMILY} | egrep "definition" | tr "/" " " | awk '{print $3}' | sed 's/"$//'`

aws ecs update-service --cluster IGonzalez_ECS_Cluster --service ${SERVICE_NAME} --task-definition ${TASK_FAMILY}:${TASK_REVISION} --desired-count 2