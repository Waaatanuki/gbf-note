<script lang="ts" setup>
const form = ref<Record<string, any>>({
  npcId: '',
  name_chs: '',
  nickname: '',
  title_jp: '',
  name_jp: '',
  cv: '',
  category: '',
  rarity: '',
  element: '',
  type: '',
  race: '',
  gender: '',
  weapon: '',
  release_date: '',
})
const { copy } = useClipboard()

function formatReleaseDate() {
  const dateStr = form.value.release_date
  const match = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})/)
  if (match) {
    form.value.release_date = `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`
  }
}

function onSubmit() {
  const formData = { ...form.value }
  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key] = formData[key].join(';')
    }
  }
  copy(JSON.stringify(formData, null, 2))
  ElMessage.success('已复制')
}
</script>

<template>
  <el-form m-auto :model="form" label-width="100px">
    <div flex>
      <el-form-item label="ID">
        <el-input v-model.number="form.npcId" />
      </el-form-item>
      <el-form-item label="稀有度">
        <el-radio-group v-model="form.rarity">
          <el-radio value="SSR" label="SSR" />
          <el-radio value="SR" label="SR" />
          <el-radio value="R" label="R" />
        </el-radio-group>
      </el-form-item>
    </div>
    <div flex>
      <el-form-item label="中文名">
        <el-input v-model="form.name_chs" />
      </el-form-item>
      <el-form-item label="日文名">
        <el-input v-model="form.name_jp" />
      </el-form-item>
    </div>
    <div flex>
      <el-form-item label="称号">
        <el-input v-model="form.title_jp" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
    </div>
    <div flex>
      <el-form-item label="CV">
        <el-input v-model="form.cv" />
      </el-form-item>
      <el-form-item label="分类">
        <el-input v-model="form.category" />
      </el-form-item>
    </div>

    <el-form-item label="属性">
      <el-radio-group v-model="form.element">
        <el-radio value="火" label="火" />
        <el-radio value="水" label="水" />
        <el-radio value="土" label="土" />
        <el-radio value="风" label="风" />
        <el-radio value="光" label="光" />
        <el-radio value="暗" label="暗" />
        <el-radio value="可变化" label="可变化" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.type">
        <el-radio value="平衡" label="平衡" />
        <el-radio value="攻击" label="攻击" />
        <el-radio value="回复" label="回复" />
        <el-radio value="防御" label="防御" />
        <el-radio value="特殊" label="特殊" />
        <el-radio value="可变化" label="可变化" />
      </el-radio-group>
    </el-form-item>
    <div flex>
      <el-form-item label="种族">
        <el-select v-model="form.race" multiple placeholder="" style="width: 180px;">
          <el-option value="人类" label="人类" />
          <el-option value="兽耳族" label="兽耳族" />
          <el-option value="不明" label="不明" />
          <el-option value="牛族" label="牛族" />
          <el-option value="豆丁" label="豆丁" />
          <el-option value="星晶兽" label="星晶兽" />
        </el-select>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" multiple placeholder="" style="width: 180px;">
          <el-option value="女" label="女" />
          <el-option value="男" label="男" />
          <el-option value="不详" label="不详" />
        </el-select>
      </el-form-item>
    </div>
    <div flex>
      <el-form-item label="武器">
        <el-select v-model="form.weapon" multiple placeholder="" style="width: 180px;">
          <el-option value="剑" label="剑" />
          <el-option value="短剑" label="短剑" />
          <el-option value="铳" label="铳" />
          <el-option value="枪" label="枪" />
          <el-option value="杖" label="杖" />
          <el-option value="格斗" label="格斗" />
          <el-option value="斧" label="斧" />
          <el-option value="弓" label="弓" />
          <el-option value="乐器" label="乐器" />
          <el-option value="刀" label="刀" />
        </el-select>
      </el-form-item>
      <el-form-item label="发布日期">
        <el-input v-model="form.release_date" @blur="formatReleaseDate" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">
        复制
      </el-button>
    </el-form-item>
  </el-form>
</template>
