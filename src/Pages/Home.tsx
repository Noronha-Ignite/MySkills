import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import uuid from 'react-native-uuid';
import { Button, SkillCard } from '../components';
import { Skill } from '../models/Skill';

export const Home = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillToBeAdd, setSkillToBeAdd] = useState('');

  const handleAddSkill = () => {
    if (!skillToBeAdd.trim()) {
      return;
    }

    setSkills((previousSkills) => [
      ...previousSkills,
      { id: uuid.v4() as string, name: skillToBeAdd },
    ]);
    setSkillToBeAdd('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>👋 Welcome Noronha</Text>

      <TextInput
        style={styles.textInput}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={skillToBeAdd}
        onChangeText={setSkillToBeAdd}
      />

      <Button onPress={handleAddSkill} />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
        My skills
      </Text>

      <FlatList
        data={skills}
        renderItem={({ item }) => <SkillCard skill={item} />}
        keyExtractor={(skill) => skill.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700',
  },
  textInput: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    paddingHorizontal: 15,
    marginTop: 30,
    borderRadius: 8,
  },
});
