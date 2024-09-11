#!/bin/bash

# Verificar se o usuário deu o nome binario
if [ -z "$1" ]; then
  echo "Usage: $0 <binary_name>"
  exit 1
fi

BINARY_NAME=$1

# achar o PID do processo
PIDS=$(pgrep "$BINARY_NAME")

# verificar se o processo foi encontrado
if [ -z "$PIDS" ]; then
  echo "No processes found for $BINARY_NAME"
  exit 0
fi

# matando o processo
for PID in $PIDS; do
  echo "Killing process $PID ($BINARY_NAME)"
  kill $PID
  
  # Forçar a morte
  sleep 1
  if kill -0 $PID 2>/dev/null; then
    echo "Process $PID didn't terminate, forcing kill"
    kill -9 $PID
  fi
done

echo "All processes for $BINARY_NAME have been killed."