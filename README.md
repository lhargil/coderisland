# Coderisland


### feature library (routed)
nx g lib {app-name/subdomain/feature-name} --routing --style=scss --tags="scope:{app-name},type:feature" --strict -d

### angular shell component
nx g component containers/{shell-name} --inlineStyle --export --displayBlock --project={project-name} --module={module-name} --prefix={prefix} -d

### dumb component
nx g component components/{dumb-component-name} --inlineStyle --displayBlock --project={project-name} --module={module-name} --prefix={prefix} --changeDetection=OnPush -d

### feature library (not routed)
nx g lib {app-name/subdomain/feature-name} --style=scss --tags="scope:{app-name},type:feature" --strict -d


This project was generated using [Nx](https://nx.dev).
