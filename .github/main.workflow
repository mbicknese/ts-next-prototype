workflow "Build commit" {
  on = "push"
  resolves = ["Build", "Publish coverage"]
}

action "Install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
}

action "Run tests" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install dependencies"]
  args = "test -- --coverage"
}

action "Publish coverage" {
  uses = "docker://node"
  needs = ["Run tests"]
  runs = "npx"
  args = "codecov"
  secrets = ["CODECOV_TOKEN"]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Run tests"]
  args = "run build"
}

