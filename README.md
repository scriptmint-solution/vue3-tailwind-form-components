# Vue3 Tailwind CSS Form Components

**Reusable Form Input Components built with Vue 3, Tailwind CSS 3.**

LiveDemo: https://scriptmint-solution.github.com/vue3-tailwind-form-components

GitHub Repo: https://github.com/scriptmint-solution/vue3-tailwind-form-components

#### For Advanced & Full Featured Admin Panel built with Laravel, Vue.js 3 & Tailwind CSS 3, visit https://scriptmint.com/vana-admin

### Listing Form Input Components with Usage:
#### Base Input
```
<div>
    <BaseInput name="name" v-model="name" label="Sample Input with Help" autofocus />
    <HelpBlock><i class="fas fa-question-circle"></i> This is a help block!</HelpBlock>
</div>

<BaseInput name="name" v-model="name" label="Sample Text Input with Error" error="This is form error message." />

<BaseInput name="name" v-model="name" label="Sample Success Input" success />

<BaseInput name="name" v-model="name" label="Sample Info Input" info />

<BaseInput name="name" v-model="name" label="Sample Warning Input" warning />
```

#### Base Textarea
```
<BaseTextarea name="address" v-model="address" lable="Sample Textarea" />
```

#### Base Checkbox
```
<BaseCheckbox name="terms" v-model="terms" label="Sample Checkbox" />

<BaseCheckbox name="terms" v-model="terms" label="Sample Checkbox" success />

<BaseCheckbox name="terms" v-model="terms" label="Sample Checkbox" danger />

<BaseCheckbox name="terms" v-model="terms" label="Sample Checkbox" info />

<BaseCheckbox name="terms" v-model="terms" label="Sample Checkbox" warning />
```

#### Base Radio
<em>Coming Soon</em>

#### Base Toggle
<em>Coming Soon</em>

#### Base Dropdown
<em>Coming Soon</em>

#### Base Multiselect
<em>Coming Soon</em>

#### Base Editor
<em>Coming Soon</em>

```
git clone git@github.com:scriptmint-solution/vue3-tailwind-form-components.git form-components
cd form-components
npm install
npm run dev
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
