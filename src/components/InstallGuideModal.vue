<template>
  <ModalBase class="install-guide-modal" title="ホーム画面に追加" @close="onClose">
    <Grid gap="24px">
      <Label>
        ホーム画面に追加すると、アプリのようにフルスクリーンで起動できます。
      </Label>
      <FormGroup v-if="platform === 'ios'" title="iPhone / iPad（Safari）">
        <ol class="steps">
          <li>
            <span>画面下部の<strong>共有</strong>ボタン（四角に↑のアイコン）をタップ</span>
            <img :src="step1" alt="ステップ1" class="step-image" />
          </li>
          <li>
            <span><strong>「もっと見る」</strong>をタップ</span>
            <img :src="step2" alt="ステップ2" class="step-image" />
          </li>
          <li>
            <span><strong>「ホーム画面に追加」</strong>を選択</span>
            <img :src="step3" alt="ステップ3" class="step-image" />
          </li>
        </ol>
      </FormGroup>
      <FormGroup v-else title="Android（Chrome）">
        <ol class="steps">
          <li>画面右上の<strong>メニュー（︙）</strong>を開く</li>
          <li><strong>「アプリをインストール」</strong>または<strong>「ホーム画面に追加」</strong>を選択</li>
          <li>表示されたダイアログで<strong>「インストール」</strong>をタップ</li>
        </ol>
      </FormGroup>
    </Grid>
    <template #footer>
      <Button primary @click="onClose">閉じる</Button>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import FormGroup from '@/components/molecules/FormGroup.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'
import { dismissInstallGuide, getPlatform } from '@/utils/pwa'
import step1 from '@/assets/1.webp'
import step2 from '@/assets/2.webp'
import step3 from '@/assets/3.webp'

const emit = defineEmits<{ (e: 'close'): void }>()

const platform = getPlatform()

const onClose = () => {
  dismissInstallGuide()
  emit('close')
}
</script>

<style scoped>
.steps {
  display: grid;
  gap: 16px;
  list-style: decimal;
  padding-left: 24px;
  line-height: 1.6;
}

.steps li {
  display: list-item;
}

.steps li > span {
  display: block;
}

.step-image {
  display: block;
  margin-top: 8px;
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid var(--border);
}

strong {
  font-weight: bold;
}
</style>
