import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Skill } from '../models/Skill';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.skillContainer}>
      <Text style={styles.skillText}>{skill.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
    padding: 15,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginVertical: 12,
    borderRadius: 8,
  },
  skillText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
  },
});
