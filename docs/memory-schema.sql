begin;
create table if not exists public.multimind_memories (
  user_id uuid not null references auth.users(id) on delete cascade,
  id uuid not null,
  content text not null,
  project_id text check (project_id is null or char_length(project_id) <= 100),
  enabled boolean not null default true,
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  check (char_length(content) between 1 and 1500 or (deleted_at is not null and content = '')),
  primary key (user_id, id)
);
alter table public.multimind_memories enable row level security;
alter table public.multimind_memories force row level security;
revoke all on public.multimind_memories from public, anon, authenticated;
-- Remove previous permissive policies on this application table before recreating.
do $$ declare p record; begin
  for p in select policyname from pg_policies where schemaname='public' and tablename='multimind_memories' loop
    execute format('drop policy %I on public.multimind_memories',p.policyname);
  end loop;
end $$;
grant select, insert, update, delete on public.multimind_memories to authenticated;
create policy "Read own memories" on public.multimind_memories for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own memories" on public.multimind_memories for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own memories" on public.multimind_memories for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Delete own memories" on public.multimind_memories for delete to authenticated using ((select auth.uid()) = user_id);
commit;
