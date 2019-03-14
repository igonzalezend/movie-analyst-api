#!/bin/bash
SERVICE_NAME="IGonzalez_ECS_Backend_Service"
BUILD_NUMBER=$1
TASK_FAMILY="IGonzalez_ECS_TD_Backend"
CLUSTER="IGonzalez_ECS_Cluster"

# Create a new task definition for this build
sed -i "s;%BUILD_NUMBER%;${BUILD_NUMBER};g" backend_service.json 
aws ecs register-task-definition --family ${TASK_FAMILY} --cli-input-json file://backend_service.json

# Update the service with the new task definition and desired count
TASK_REVISION=`aws ecs describe-task-definition --task-definition ${TASK_FAMILY} | egrep "revision" | tr "/" " " | awk '{print $2}' | sed 's/"$//'`

aws ecs stop-task --cluster ${CLUSTER} --task $(aws ecs list-tasks --cluster ${CLUSTER} --service ${SERVICE_NAME} --output text --region us-east-1 --query taskArns[0])

aws ecs update-service --cluster ${CLUSTER} --service ${SERVICE_NAME} --desired-count 2 --force-new-deployment