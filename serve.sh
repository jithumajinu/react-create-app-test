## run  sh ./serve.sh
## build ##
export PUBLIC URL="\${GUI_CONTEXT]"
export NODE_OPTIONS=--max_old_space_size=4096


yarn build
mv ./build/index.html ./build/index.html.tpl

## serve ##
export GUI_CONTEXT=""
envsubst < ./build/index.html.tpl > ./build/index.html

node server.js