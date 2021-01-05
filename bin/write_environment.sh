#!/bin/bash
cat << EOF > .env
##########################################################################
# THIS FILE HAS BEEN AUTOMATICALLY GENERATED BY bin/write_environment.sh #
##########################################################################
# External links
ORIGIN=$ORIGIN
# Gov Notify
API_KEY=$API_KEY
SMS_INITIAL_TEMPLATE_ID=$SMS_INITIAL_TEMPLATE_ID
SMS_JOIN_TEMPLATE_ID=$SMS_JOIN_TEMPLATE_ID
EMAIL_INITIAL_TEMPLATE_ID=$EMAIL_INITIAL_TEMPLATE_ID
EMAIL_JOIN_TEMPLATE_ID=$EMAIL_JOIN_TEMPLATE_ID
SMS_UPDATED_VISIT_TEMPLATE_ID=$SMS_UPDATED_VISIT_TEMPLATE_ID
EMAIL_UPDATED_VISIT_TEMPLATE_ID=$EMAIL_UPDATED_VISIT_TEMPLATE_ID
# Security
JWT_SIGNING_KEY=$JWT_SIGNING_KEY
# Database
PG_DB_URL=$DATABASE_URL
PG_TEST_DB_URL=$TEST_DATABASE_URL
URI=$URI

APP_ENV=$APP_ENV

# MSSQL Database
MSQL_DB_DRIVER=$MSQL_DB_DRIVER
MSQL_DB_PORT=$MSQL_DB_PORT
MSQL_DB_POOL_MAX=$MSQL_DB_POOL_MAX
MSQL_DB_POOL_MIN=$MSQL_DB_POOL_MIN
MSQL_DB_POOL_IDLE_TIMEOUT=$MSQL_DB_POOL_IDLE_TIMEOUT
MSQL_TEST_DB_USER=$MSQL_TEST_DB_USER
MSQL_TEST_DB_PASSWORD=$MSQL_TEST_DB_PASSWORD
MSQL_TEST_DB_SERVER=$MSQL_TEST_DB_SERVER
MSQL_TEST_DB_NAME=$MSQL_TEST_DB_NAME

# Whereby config
ENABLE_WHEREBY=$ENABLE_WHEREBY
WHEREBY_API_KEY=$WHEREBY_API_KEY
WHEREBY_SUBDOMAIN=$WHEREBY_SUBDOMAIN
# Sentry config
SENTRY_DSN=$SENTRY_DSN
SENTRY_ORG=$SENTRY_ORG
SENTRY_PROJECT=$SENTRY_PROJECT
SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENABLE_SENTRY=$ENABLE_SENTRY
# Feature flags
SHOW_NAVIGATION_BAR=$SHOW_NAVIGATION_BAR
ENABLE_UR_QUESTION=$ENABLE_UR_QUESTION
EOF

echo "Environment file written"
wc -c .env
