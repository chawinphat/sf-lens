import { MotiView, AnimatePresence } from "moti";
import { Pressable, Text } from "react-native";

interface DropdownProps {
  visible: boolean;
  items: string[];
  onSelect: (item: string) => void;
  onClose: () => void;
}

export default function Dropdown({
  visible,
  items,
  onSelect,
  onClose,
}: DropdownProps) {
  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* the actual dropdown panel */}
          <MotiView
            from={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ type: "timing", duration: 200 }}
            className="absolute
            top-16 left-5 right-5
              z-50 origin-top
              bg-white rounded-xl shadow-lg
              p-4
              divide-y divide-gray-200 
              overflow-hidden
            "
          >
            {items.map((item, idx) => (
              <Pressable
                key={item}
                className={`
                  flex-row items-center 
                  px-4 py-3
                  ${
                    idx < items.length - 1 ? "" : ""
                  } /* last has no extra styles */
                `}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text className="text-gray-700 text-base">{item}</Text>
              </Pressable>
            ))}
          </MotiView>
        </>
      )}
    </AnimatePresence>
  );
}
