#!/bin/bash

while true; do
  if (($RANDOM % 2)); then
    echo "[$(date)][OUTPUT] Regular output"
  else
    echo "[$(date)][ERROR] Error output" >>/dev/stderr
  fi
  sleep 0.5
done