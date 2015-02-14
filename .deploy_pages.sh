#!/bin/bash

rm -rf out || exit 0;
mkdir out;

GH_REPO="@github.com/pmlamotte/Heister.git"

FULL_REPO="https://$GH_TOKEN$GH_REPO"

cd out
git clone $FULL_REPO .
git checkout gh-pages
git config user.name "heister-travis"
git config user.email "travis"

git rm -r *
cp -R ../public/* .

git add .
git commit -m "deployed to github pages"
git push --quiet $FULL_REPO gh-pages