<template>
    <div class="user">
        <div>
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="用户名">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="密码">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="喜欢的运动">
                            <el-select>
                                <el-option>足球</el-option>
                                <el-option>篮球</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="用户名">
                            <el-input />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
</script>

<style scoped></style>
